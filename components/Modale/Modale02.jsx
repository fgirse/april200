'use client';

import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import Map from '../Leaf/Map';
import Button from '../Leaf/Button';
import dynamic from 'next/dynamic'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from 'react-simple-tooltip';
import styles from '../../styles/Home.module.scss';

const DEFAULT_CENTER = [47.99757, 7.83806]

export default function Modale02() {  
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
            content="öffne Openstreet !!!"
            direction="right"
          >
            <button
              type="button"
              onClick={openModal}
              className="mb-[3vw] w-60 rounded-md border bg-green-500 bg-opacity-80 px-4 py-2 text-[1.66rem] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            ><img className="w-9 h-9 p-2 inline" src="data:image/png;base64,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"/>
              Openstreet
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
          <h1 className="mb-5 text-yellow-600 text-3xl text-center headingA">
            openstreet map
          </h1>

          <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

           
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
