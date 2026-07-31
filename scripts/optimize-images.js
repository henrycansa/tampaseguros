const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const LOGO_PATH = path.join(ROOT, "public", "logos", "tampa-seguros-logo.png");
const APP_DIR = path.join(ROOT, "src", "app");

const TARDIS_BLUE = { r: 0, g: 61, b: 109, alpha: 1 };

async function optimizeHeroImages() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f.toLowerCase().endsWith(".png"));
  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 76 })
      .toFile(outputPath);
    const { size } = fs.statSync(outputPath);
    console.log(`OK  ${baseName}.webp  ${(size / 1024).toFixed(0)} KB`);
  }
}

async function buildIcons() {
  // El escudo (símbolo) ocupa aprox. el 27% izquierdo del wordmark completo.
  const meta = await sharp(LOGO_PATH).metadata();
  const shieldWidth = Math.round(meta.width * 0.275);

  const shieldBuffer = await sharp(LOGO_PATH)
    .extract({ left: 0, top: 0, width: shieldWidth, height: meta.height })
    .trim()
    .toBuffer();

  // icon.png (favicon / app icon) - fondo transparente, 512x512
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: await sharp(shieldBuffer).resize({ width: 440, height: 440, fit: "inside" }).toBuffer(), gravity: "center" }])
    .png()
    .toFile(path.join(APP_DIR, "icon.png"));
  console.log("OK  src/app/icon.png");

  // apple-icon.png - fondo blanco opaco, 180x180 (Apple recomienda sin transparencia)
  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([{ input: await sharp(shieldBuffer).resize({ width: 150, height: 150, fit: "inside" }).toBuffer(), gravity: "center" }])
    .png()
    .toFile(path.join(APP_DIR, "apple-icon.png"));
  console.log("OK  src/app/apple-icon.png");

  // opengraph-image.png - 1200x630, fondo blanco, logo centrado, barra inferior Tardis Blue
  const logoResized = await sharp(LOGO_PATH).resize({ width: 900, withoutEnlargement: true }).toBuffer();
  const logoMeta = await sharp(logoResized).metadata();

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([
      { input: logoResized, left: Math.round((1200 - logoMeta.width) / 2), top: Math.round((630 - logoMeta.height) / 2) - 20 },
      {
        input: await sharp({
          create: { width: 1200, height: 14, channels: 4, background: TARDIS_BLUE },
        })
          .png()
          .toBuffer(),
        left: 0,
        top: 616,
      },
    ])
    .png()
    .toFile(path.join(APP_DIR, "opengraph-image.png"));
  console.log("OK  src/app/opengraph-image.png");
}

async function main() {
  await optimizeHeroImages();
  await buildIcons();
  console.log("Listo.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
