import { Hgroup } from '@/src/shared/ui/hgroup/Hgroup.tsx';
import { Page } from '@/src/shared/ui/page/Page.tsx';

export default function ProfilePage() {
  return (
    <Page>
      <Hgroup
        title="Déterminez"
        subtitle="votre métabolisme basal"
      />
      <div>
        L’indice de masse corporelle (IMC) profile<div style={{ height: '2000px' }}></div>
      </div>
    </Page>
  );
}
