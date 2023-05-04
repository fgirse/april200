'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment} from 'react';
import Tooltip from '../../utils/SimpleTooltip';
import React, { useState, useEffect} from 'react';
import { container } from 'tailwindcss/defaultTheme';
import ArenaIlustration from '../../public/arena.js';
import Image from 'next/image';


export default function Modale15 () {
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
              content="SC Freiburg Info"
              direction="right"
            >
              <button
                type="button"
                onClick={openModal}
               
                className="mx-auto mb-[3vw] w-[70px] h-[70px] rounded-[24px] bg-[#edc513] text-[1.66rem] font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                 <div className="flex flex-col items-center">
                <img src="/Fussball.svg" alt="icon" className="w-3/4 h-3/4 object-contain" />
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

        <Dialog.Panel className="border-yellow-600 w-full max-w-7xl transform overflow-hidden rounded-2xl border-8 bg-[#0C0C0C] p-2 text-left align-middle shadow-xl transition-all">
            <Section>
      <Container>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
        doloribus impedit.
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
            vel mollitia? Vel provident culpa dignissimos possimus, perferendis
            consectetur odit accusantium dolorem amet voluptates aliquid,
            ducimus tempore incidunt quas. Veritatis molestias tempora
            distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
            illum impedit!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
         
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
    