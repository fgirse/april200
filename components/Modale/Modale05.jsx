'use client';

import MyDocument from '../MenuDrinks/DrinksPDF.js'
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from 'react-simple-tooltip';
import { PDFViewer } from '@react-pdf/renderer';
import Menu from '../MenuDrinks/Container/Menu/SpecialMenu'


export default function Modale05 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <div className="example-wrapper">
            <Tooltip
              content="Click zu Biere"
              direction="right"
            >
              <button
                type="button"
                onClick={openModal}
                className="mb-[3vw] w-60 rounded-md border bg-yellow-600 bg-opacity-80 px-4 py-2 text-[1.66rem] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Biere           
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
                  <Dialog.Panel className="border-gray-100-500 w-full max-w-md transform overflow-hidden rounded-2xl border bg-red-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className='flex flex-col justify-center items-center'>
                  <Image src="/LogoAlt.png" width="200" height="16" alt="LogoAlt" className="mb-[3vh] uppercase text-lg text-white tracking-wider"/>
                  </div>
                    <Dialog.Title
                      as="h3"
                      className="text-center text-3xl font-medium headingA leading-6 text-amber-500"
                    >
                      Bier vom Fass - Flaschenpost
                    </Dialog.Title>
                    <div className='mt-2 flex flex-col justify-center items-center'>
                      <Menu/>
                        {/*<Image src="/menu-pdf-biere.png" height={1400} width={480} alt="Menu Biere" />*/}                
    
      <hr />
    </div>
                    
  
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