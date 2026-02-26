import { site } from '@/content/site';

export const AnnouncementBanner = () => {
  if (!site.announcement.enabled) return null;

  return (
    <div className="border-b border-accent-100 bg-accent-50/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-sm text-slate-700 dark:text-slate-300">
        <p>{site.announcement.text}</p>
        <a className="font-medium text-accent-600 hover:text-accent-500" href={site.announcement.href}>
          Learn more
        </a>
      </div>
    </div>
  );
};
