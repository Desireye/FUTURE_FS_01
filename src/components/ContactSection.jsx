import { Mail, LocationEdit, Send } from 'lucide-react'
import { cn } from '../lib/utils'

const ContactSection = () => {
  return (
    <section className='py-24 px-4 relative bg-secondary/30'>
        <div className='conatiner mx-auto max-w-5xl'>
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">
                Get In <span className='text-primary'>Touch</span>
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>

            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl'>Contact Information</h3>

                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href="mailto:modesiresoneye@gmail.com"
                                className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    modesiresoneye@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <LocationEdit className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a 
                                className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Lagos, Nigeria
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send me a Message!</h3>

                        <form action="" className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>
                                    Your Name
                                </label>
                                <input type="text" id='name' name='name' required
                                placeholder='Soneye Modesireoluwa...'
                                className={cn('w-full px-4 py-3 rounded-md border border-input', 
                                'bg-background focus:outline-hidden focus:ring-2 focus:ring-primary')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>
                                    Your Email
                                    </label>
                                <input type="email" id='email' name='email' required
                                placeholder='xyz@gmail.com...'
                                className={cn('w-full px-4 py-3 rounded-md border border-input', 
                                'bg-background focus:outline-hidden focus:ring-2 focus:ring-primary')}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>
                                    Your Message
                                </label>
                                <textarea id='message' name='message' required
                                placeholder='Your message...'
                                className={cn('w-full px-4 py-3 rounded-md border border-input resize-none', 
                                'bg-background focus:outline-hidden focus:ring-2 focus:ring-primary')}
                                />
                            </div>

                            <button type='submit' className={cn('cosmic-button w-full flex items-center justify-center gap-2',
                                ''
                            )}
                            >
                                <Send /> Send Message
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection