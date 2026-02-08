import { Title } from '@/src/shared/ui/title/Title.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/hgroup/Hgroup.module.scss';

export interface HgroupType {
  className?: string;
  subtitle?: string;
  title: string;
}

export const Hgroup = ({ className, title, subtitle }: HgroupType) => {
  return (
    <hgroup className={classNames(styles.hgroup, className)}>
      <Title className={styles.title}>{title}</Title>
      {subtitle && (
        <Title
          className={styles.subtitle}
          tag="h2"
        >
          {subtitle}
        </Title>
      )}
    </hgroup>
  );
};
