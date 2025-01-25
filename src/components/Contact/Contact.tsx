'use client'
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from "react-hook-form"
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";



import Link from 'next/link';
import CalLink from '../Cal/Link/CalLink';
import { b } from 'motion/react-client';

export default function Contact() {
    const [sending, setSending] = useState(false)
    const [button, setButton] = useState("Submit Inquiry")
    // React Form
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Name: "",
            Email: "",
            Subject: "",
            Message: "",
        }
    })
    // Form Submission
    const onSubmit = async (data: any) => {
        if (!sending) {
            setSending(true)
            const sendingToast = toast.loading('Sending');
            try {
                const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: data.Name,
                        email: data.Email,
                        phone: data.Phone,
                        subject: data.Subject,
                        message: data.Message,
                    }),
                });
                if (await response.json() == "Message Sent!") {
                    toast.dismiss(sendingToast)
                    toast.success("Message Sent!")
                    setButton("Message Sent!")
                } else {
                    toast.dismiss(sendingToast)
                    toast.error("Message Failed")
                }
            } catch (e) {
                toast.dismiss()
                toast.error("Please Try Again")
                setSending(false)
            }
        }
    };


    // JSX
    return (
        <section className="px-4 py-12 bg-opacity-50 bg-tone2 backdrop-blur-sm" id="contact">
            <div className="container relative grid-cols-2 gap-8 mx-auto lg:grid">
                {/* Text */}
                <div className='mb-8 lg:max-w-lg'>
                    <h2 className="flex items-center gap-2 mb-4 text-h4 md:text-h2">
                        <span className='text-primary'>
                            <BiCoffeeTogo />

                        </span>

                        Let&apos;s Connect
                    </h2>
                    <p className='mb-4'>
                        I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    {/* Icons */}
                    <div className='flex gap-4 mb-8'>
                        <Link href={`#`} className='text-primary text-h2' target='_blank'>
                            <FaLinkedin />
                        </Link>
                        <Link href={`https://github.com/Voodoo-Dolls`} className='text-primary text-h2' target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link href={`https://discord.gg/dNyv9Pnx`} className='text-primary text-h2' target='_blank'>
                            <FaDiscord />
                        </Link>
                    </div>
                    {/* Video */}
                    <div className='flex items-center gap-4 text-h5'>

                        <span className='text-primary'>
                            <FaVideo />
                        </span>
                        <CalLink />
                    </div>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit((data) => {
                    onSubmit(data)
                })}
                    className='flex flex-col gap-4'
                >
                    <h3 className='flex items-center gap-2 mb-4 text-h4 md:text-h2 text-balance'>
                        <span className='text-primary'>
                            <MdOutlineEmail />
                        </span>
                        Email Me
                    </h3>
                    {/* Name */}
                    <label className="w-full mb-4 form-control" >
                        <div className="h-4 p-0 label">
                            <span className='mb-4 ml-2'>Name</span>
                        </div>
                        <input
                            {...register("Name",
                                {
                                    required: "Please Enter a Name"
                                })
                            }
                            type="text"
                            placeholder="Jane Doe"
                            className="w-full bg-transparent border rounded input-md input input-bordered"
                            name='Name'
                            autoComplete='on'
                        />
                        {errors.Name?.message && (
                            <p role="alert">{errors.Name.message}</p>
                        )}
                    </label>
                    {/* Email */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="mb-4 ml-2 ">Email</span>
                        </div>
                        <input
                            {...register("Email", {
                                required: "Please enter an email",
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Please enter a valid email address"
                                },

                            })}
                            type="email"
                            placeholder="janedoe@email.com"
                            className="w-full bg-transparent border rounded input-md input input-bordered"
                            name='Email'
                            autoComplete='on'
                        />
                        <p>{errors.Email?.message}</p>
                    </label>

                    {/* Subject */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="mb-4 ml-2 ">Subject</span>
                        </div>
                        <input
                            {...register("Subject", {
                                required: "Please enter a subject",

                            })}
                            type="text"
                            placeholder="Just saying hi..."
                            className="w-full bg-transparent border rounded input-md input input-bordered"
                            name='Subject'
                        />
                        <p>{errors.Subject?.message}</p>
                    </label>
                    {/* Message */}
                    <label className="mb-4 form-control"

                    >
                        <div className="h-4 p-0 label">
                            <span className="mb-4 ml-2 ">Message</span>
                        </div>
                        <textarea
                            {...register("Message", {
                                required: "Please enter a message more between 20-1000 characters",
                                minLength: {
                                    value: 20,
                                    message: "Please enter a message more between 20-1000 characters"
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "Please enter a message more between 20-1000 characters"
                                }

                            })}
                            className="h-24 rounded textarea textarea-bordered"
                            placeholder="Let&apos;s talk about..."
                            name='Message'
                        >
                        </textarea>
                        <p>{errors.Message?.message}</p>
                    </label>

                    <button type='submit' className={`flex items-center w-full py-1 mt-4 rounded btn btn-outlin border-primary text-primary text-h6 h-fit disabled:text-green-500`} disabled={sending}>
                        <IoIosSend />
                        {button}
                    </button>
                </form>

            </div>
        </section>
    )
}
