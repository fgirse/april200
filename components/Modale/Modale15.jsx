'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import Tooltip from '../../utils/SimpleTooltip';
import Modale03 from '../Modale/Modale03'

export default function Modale15 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    function Sportarena() {
      const [tabelle, setTabelle] = useState([]);
      var [loading, setLoading] = useState(true);

      useEffect(() => {
        const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
        const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
        const url2 = (Url, { headers: { 'X-Auth-Token': Token } });
        const url4 =
          'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4';
    
        // declare the data fetching function
    
        const fetchBundesligaData = async () => {
          try {
            const response = await fetch(Url, {
              headers: { 'X-Auth-Token': Token },
            });
            const json = await response.json();
            console.log(json.season);
            setTabelle(json.season);
          } catch (error) {
            console.log('error', error);
          }
        };
    
        fetchBundesligaData();
        setLoading((loading = false));
      }, []);

      return (
        <>
          <div className="inset-0 flex items-center justify-center">
            <div className="example-wrapper">
              <Tooltip
                content="Click SC Freiburg Info"
                direction="right"
              >
                <button
                type="button"
                onClick={openModal}
               
                className="mx-auto mb-[3vw] w-[70px] h-[70px] rounded-[24px] bg-[#edc513] text-[1.66rem] font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                 <div className="flex flex-col items-center">
                <img src="/logoDFL.png" alt="icon" className="w-3/4 h-3/4 object-contain" />
                
                </div>     
                </button>
              </Tooltip>
            </div>
          </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-slate-800/75" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >

        <Dialog.Panel className="border-yellow-600 w-full max-w-6xl transform overflow-hidden rounded-2xl border-8 bg-[#0C0C0C] p-2 text-left align-middle shadow-xl transition-all">
            <Section>
      <Container>
        <div className='11/12 flex flex-col items-center justify-center'>
        
       
        <p className='text-center text-white text-[4rem]'>SC FREIBURG</p>
         </div>
         
      </Container>
      
    </Section>
                    
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        zurück
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
}
