'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from '../../utils/SimpleTooltip';
import { SpecialMenuWein } from '../../components/MenuDrinks/Container/';
import ScrollToTop from '../ScrollToTopButton'

export default function Modale06 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
    
    function scrollView() {
      const Modale06 = document.getElementById("Modale06");
      Modale05.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <div className="example-wrapper">
            <Tooltip
              content="Click zu Weine"
              direction="right"
            >
              {/*{<button
                type="button"
                onClick={openModal}
                className="mb-[3vw] w-60 rounded-md border bg-yellow-600 bg-opacity-80 px-4 py-2 text-[1.66rem] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Biere           
              </button>*/}

      
          <Image
            src="/bottles500.png"
            width="200"
            height="300"
            alt="illustration weinflschen"
            onClick={(openModal)}
            curser = "grab"
            className ='cursor-pointer hover:rounded-full hover:bg-slate-700 hover:border hover:transform hover:scale-110 '/>
      

            </Tooltip>
            <h1 className="mt-[1vh] text-center text-2xl text-gray-50">Weine</h1>
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
        
       
        <SpecialMenuWein/>
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