'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from '../../utils/SimpleTooltip';
import { SpecialMenu } from '../../components/MenuDrinks/Container/';


export default function Modale05 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
     

    }
  
    function scrollView() {
      const Modale05 = document.getElementById("Modale05");
      Modale05.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <div className="example-wrapper">
            <Tooltip
              content="Click zu Biere"
              direction="top"
            >
             
          <Image
            src="/astrabierglas.png"
            width="300"
            height="400"
            alt="illustration astrabierglas"
            onClick={(openModal)}

            className ='cursor-pointer rounded-full hover:bg-slate-700 hover:border hover:transform hover:scale-110 '/>
      

            </Tooltip>
            <h1 className="mt-[1vh] text-center text-2xl text-gray-50">Biere</h1>
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

            <Section id="Modale05" >
      <Container>
        <div className='11/12 flex flex-col items-center justify-center'>
        
       
        <SpecialMenu/>
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