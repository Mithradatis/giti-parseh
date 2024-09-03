import { capitalize } from '@/lib/utils'

const ContactForm = ({ trans }: { trans: any }) => {
  return (
    <div className={'flex md:flex-nowrap flex-wrap gap-4'}>
      <input
        id="subscriber-email-address"
        className={'flex-1 border-dashed border-2 border-slate-400 p-4 rounded-xl'}
        type="email"
        placeholder={`${capitalize(trans.email_address)}`}
      />
      <button
        className={
          'bg-emerald-700 md:w-auto w-full text-white px-12 py-4 text-lg animate-shimmer items-center justify-center rounded-xl font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
        }
      >
        {trans.footer_contact_form_join_button}
      </button>
    </div>
  )
}

export default ContactForm
