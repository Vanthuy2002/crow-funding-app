import { useEffect } from 'react';
import Layout from 'src/Layout/Dashboard';
import Heading from 'src/components/common/Heading';
import CampainFeature from 'src/modules/Campain/CampainFeature';
import Grid from 'src/modules/Campain/Grid';
import { PlusIcon } from '@heroicons/react/24/outline';
import Button from 'src/components/Button';

const Campain = () => {
  useEffect(() => {
    document.title = 'Campain | CrowFunding App';
  }, []);
  return (
    <Layout>
      <section className='flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl'>
        <div className='flex items-start gap-x-6'>
          <span className='flex items-center justify-center rounded-full bg-secondary w-14 h-14'>
            <PlusIcon className='text-white w-7 h-7' />
          </span>
          <div className='flex-1'>
            <h1 className='font-semibold text-[22px] mb-2'>
              Create your campain
            </h1>
            <p className='mb-2 text-sm text-text3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              cumque, veritatis similique labore voluptatibus numquam?
            </p>
            <a href='#!' className='text-sm text-primary'>
              Need any help ? Learn more...
            </a>
          </div>
        </div>

        <Button className='px-4 text-white bg-secondary bg-opacity-40'>
          Create campain
        </Button>
      </section>
      <Heading number={4}>Your campain</Heading>
      <Grid variant='custom'>
        <CampainFeature />
        <CampainFeature />
        <CampainFeature />
        <CampainFeature />
      </Grid>
    </Layout>
  );
};

export default Campain;