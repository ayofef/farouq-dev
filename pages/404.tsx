import { useRouter } from 'next/router';

const RouteError = () => {
  const { replace } = useRouter();

  // redirect all unknown route to homepage
  if (typeof window !== 'undefined') {
    replace('/');
  }

  return null;
};

export default RouteError;
