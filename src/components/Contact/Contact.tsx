'use client'
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from "react-hook-form"
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";



export default function Contact() {
    const [sending, setSending] = useState(false)
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
        <section className="p-4 mb-8 bg-opacity-75 bg-tone2" id="contact">
            <div className="container grid-cols-2 gap-4 mx-auto lg:grid">
                {/* Text */}
                <div className='mb-4 lg:max-w-md'>
                    <h2 className="flex items-center gap-2 mb-4 text-h2">
                        <span className='text-primary'>
                            <MdOutlineEmail />

                        </span>

                        Let&apos;s Connect
                    </h2>
                    <p>
                        I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit((data) => {
                    onSubmit(data)
                })}

                >
                    {/* Name */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="mb-2 ml-1 label-text">Name</span>
                        </div>
                        <input
                            {...register("Name",
                                {
                                    required: "Please Enter a Name"
                                })

                            }
                            type="text"
                            placeholder="Jane Doe"
                            className="w-full p-2 bg-transparent border rounded focus:border-primary"
                        />
                        {errors.Name?.message && (
                            <p role="alert">{errors.Name.message}</p>
                        )}
                    </label>
                    {/* Email */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="ml-1 label-text">Email</span>
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
                            className="w-full rounded input input-bordered"

                        />
                        <p>{errors.Email?.message}</p>
                    </label>

                    {/* Subject */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="ml-1 label-text">Subject</span>
                        </div>
                        <input
                            {...register("Subject", {
                                required: "Please enter a subject",

                            })}
                            type="email"
                            placeholder="Just saying hi..."
                            className="w-full rounded input input-bordered "

                        />
                        <p>{errors.Subject?.message}</p>
                    </label>
                    {/* Message */}
                    <label className="mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="ml-1 label-text">Message</span>
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
                        >

                        </textarea>
                        <p>{errors.Message?.message}</p>
                    </label>

                    <button type='submit' className="flex items-center w-full py-1 mt-4 rounded btn btn-outlin text-h6 h-fit" disabled={sending}>
                        <IoIosSend />
                        Submit Inquiry
                    </button>
                </form>

            </div>
        </section>
    )
}
