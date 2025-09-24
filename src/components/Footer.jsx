import { ArrowBigUpIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='p-4 relative border-t border-border flex flex-wrap justify-between items-center'>
        <p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()}</p>
        <a href="#hero"
        className='p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors rounded-full'><ArrowBigUpIcon /></a>
    </footer>
  )
}

export default Footer