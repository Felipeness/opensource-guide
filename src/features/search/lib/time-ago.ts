import type { TimeAgoTranslations } from "../types";

const SECONDS_PER_YEAR = 31_536_000;
const SECONDS_PER_MONTH = 2_592_000;
const SECONDS_PER_WEEK = 604_800;
const SECONDS_PER_DAY = 86_400;
const SECONDS_PER_HOUR = 3_600;
const SECONDS_PER_MINUTE = 60;

type Interval = {
  readonly singular: string;
  readonly plural: string;
  readonly seconds: number;
};

export function timeAgo(dateString: string, translations: TimeAgoTranslations): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateString).getTime()) / 1000,
  );

  const intervals: readonly Interval[] = [
    { singular: translations.year, plural: translations.years, seconds: SECONDS_PER_YEAR },
    { singular: translations.month, plural: translations.months, seconds: SECONDS_PER_MONTH },
    { singular: translations.week, plural: translations.weeks, seconds: SECONDS_PER_WEEK },
    { singular: translations.day, plural: translations.days, seconds: SECONDS_PER_DAY },
    { singular: translations.hour, plural: translations.hours, seconds: SECONDS_PER_HOUR },
    { singular: translations.min, plural: translations.mins, seconds: SECONDS_PER_MINUTE },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${count === 1 ? interval.singular : interval.plural}`;
    }
  }

  return translations.now;
}
