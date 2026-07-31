export function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-tardis/10 sm:aspect-[16/9]">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
