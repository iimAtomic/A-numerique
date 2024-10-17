"use client";
import {
  Button,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { FormEvent, Fragment, useState } from "react";

const Registerdialog: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("1");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email,
      subject: `Sujet sélectionné: ${value}`,
      message,
    };

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email envoyé avec succès!");
        setEmail("");
        setMessage("");
        setValue("1");
      } else {
        throw new Error("Une erreur est survenue lors de l'envoi de l'email");
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Erreur : ${error.message}`);
      } else {
        setStatus("Une erreur inconnue est survenue");
      }
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#0D4CAC" // Couleur bleue du site
        color="white"
        _hover={{ bg: "#418D3E" }} // Couleur au survol (vert du site)
        _active={{ bg: "#418D3E" }} // Couleur au clic (même que le survol)
      >
        Rejoignez-nous
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex flex-col items-center justify-center min-h-full px-4 py-8 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="w-auto h-12 mx-auto"
                          src="/assets/logo/logoAnum2.png"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
                          Rejoignez Nous!
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Adresse email
                            </label>
                            <input
                              id="email-address"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-none appearance-none rounded-t-md border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Entrez votre adresse email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="mt-4">
                            <RadioGroup onChange={setValue} value={value}>
                              <Stack direction="column">
                                <Radio value="1">Devenir Mentor</Radio>
                                <Radio value="2">Devenir Bénévole</Radio>
                                <Radio value="3">
                                  Bénéficier de notre aide
                                </Radio>
                                <Radio value="4">Autres</Radio>
                              </Stack>
                            </RadioGroup>
                          </div>
                          <div className="mt-4">
                            <label htmlFor="message" className="sr-only">
                              Message
                            </label>
                            <textarea
                              rows={4}
                              id="message"
                              name="message"
                              required
                              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Entrez votre message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-Blueviolet focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Envoyer
                          </button>
                        </div>
                      </form>
                      {status && (
                        <p className="mt-2 text-sm text-center text-red-500">
                          {status}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Fermer
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
};

export default Registerdialog;
