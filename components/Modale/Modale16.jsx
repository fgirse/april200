'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment} from 'react';
import Tooltip from '../../utils/SimpleTooltip';
import TabelleBL from '../TabelleBL';
import React, { useState, useEffect} from 'react';
import { container } from 'tailwindcss/defaultTheme';
import ArenaIlustration from '../../public/arena.js';
import Image from 'next/image';


export default function Modale16 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    const [tabelle, setTabelle] = useState([]);
    var [loading, setLoading] = useState(true);
    
  return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <div className="example-wrapper">
            <Tooltip
              content="Click zu Bundesliga aktuelle Tabelle"
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

        <Dialog.Panel className="border-yellow-600 w-full max-w-7xl transform overflow-hidden rounded-2xl border-8 bg-slate-600 p-2 text-left align-middle shadow-xl transition-all">
            <Section>
               <Container>
                  <div className='11/12 flex flex-col items-center justify-start'>
                {/* Content goes here */}
                      <div   className=" mb-[5vh] w-full flex-1 rounded-2xl">
                         <p className="text-1xl mx-auto mt-12 text-center font-sans text-gray-200 xl:text-2xl">
                            Saison vom{' '} <span className="font-bold text-yellow-500">{tabelle.startDate}</span>{' '}
                            bis{' '} <span className="font-bold text-yellow-500">{tabelle.endDate}</span></p>
                         <p className="mx-auto text-center text-4xl text-gray-200 md:text-5xl md:text-red-500 xl:text-6xl">Die Bundesliga</p>
                         <p className="mx-auto text-center font-sans text-2xl text-gray-200 xl:text-2xl"><span className="font-bold text-yellow-500">{tabelle.currentMatchday}.</span>Spieltag</p>
                        <div className="container mx-auto overflow-hidden bg-slate-900">
                                  <div className="mx-auto mb-24 h-full w-[100vw] border border-yellow-500 text-xs md:w-[80vw]  xl:w-[80vw]">
                            <TabelleBL className=""></TabelleBL>
                        </div>
                       </div>
                    </div>
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