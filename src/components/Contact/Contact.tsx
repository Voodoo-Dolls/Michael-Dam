'use client'
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from "react-hook-form"
import { IoIosSend } from "react-icons/io";



export default function Contact() {
    const [sending, setSending] = useState(false)
    // React Form
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Name: "",
            Email: "",
            Phone: "",
            Subject: "",
            Message: "",
            Image: ""
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
        <section className="mb-8">
            <div className="container grid gap-8 px-4 mx-auto lg:grid-cols-6 xl:px-32">
                <form onSubmit={handleSubmit((data) => {
                    onSubmit(data)
                })}
                    className="p-4 lg:col-span-4"
                >
                    <h2 className="mb-4 text-h4">Get A Quote</h2>
                    {/* Name */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="ml-1 label-text">Name</span>
                        </div>
                        <input
                            {...register("Name",
                                {
                                    required: "Please Enter a Name"
                                })

                            }
                            type="text"
                            placeholder="Jane Doe"
                            className="w-full h-6 rounded input input-bordered"
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
                            className="w-full h-6 rounded input input-bordered"

                        />
                        <p>{errors.Email?.message}</p>
                    </label>
                    {/* Phone Number */}
                    <label className="w-full mb-4 form-control">
                        <div className="h-4 p-0 label">
                            <span className="ml-1 label-text">Phone (Optional)</span>
                        </div>
                        <input
                            {...register("Phone",
                                {
                                    pattern: {
                                        value: /[0-9]{3}-[0-9]{3}-[0-9]{3}/,
                                        message: "Please enter a phone number in this format 403-307-7629"
                                    }
                                }
                            )}
                            type="tel"
                            placeholder="403-307-7629"
                            className="w-full h-6 rounded input input-bordered"

                        />
                        <p>{errors.Phone?.message}</p>
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
                            placeholder="Please provide as much information about your piece as possible. Approx. Measurments, your vision, current condition, etc."

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
