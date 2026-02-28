import { Helmet } from 'react-helmet-async';

type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export const StructuredData = ({ data }: StructuredDataProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);
