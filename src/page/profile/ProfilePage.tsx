import { Link } from 'react-router-dom';
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
        <Link to="/profile">profile</Link>
        <br />
        <Link to="/menu">menu</Link>
        L’indice de masse corporelle (IMC) profile<div style={{ height: '2000px' }}></div>
      </div>
    </Page>
  );
}
