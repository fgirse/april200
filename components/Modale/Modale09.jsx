'use client';

import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import dynamic from 'next/dynamic'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from '../../utils/SimpleTooltip';
import styles from '../../styles/Home.module.scss';


export default function Modale09() {  
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
            content="Click zu Kurze"
            direction="right"
          >
            <Image
            src="/astrabierglas.png"
            width="200"
            height="300"
            alt="illustration astrabierglas"
            onClick={(openModal)}
            curser = "grab"
            className ='cursor-pointer hover:bg-slate-700 hover:transform hover:translate-scale-150 hover:border-8 hover:border-red-500'/>
      

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
            <Dialog.Overlay className="fixed inset-0  bg-slate-700/75" />
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
                <Dialog.Panel className="border-gray-100-500 w-full max-w-md transform overflow-hidden rounded-2xl border bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Section>
        <Container>
          <h1 className="mb-5 text-yellow-600 text-3xl text-center headingA">Kurze</h1>
       

           
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
