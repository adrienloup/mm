import type { ChildrenType } from '@/src/shared/type/Children.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/main/Main.module.scss';

export const Main = ({ children, className }: { children: ChildrenType; className: string }) => {
  return (
    <main
      className={classNames(styles.main, className)}
      role="main"
    >
      {children}
    </main>
  );
};
