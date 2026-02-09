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
        L’indice de masse corporelle (IMC) profile Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.<div style={{ height: '2000px' }}></div>
      </div>
    </Page>
  );
}
