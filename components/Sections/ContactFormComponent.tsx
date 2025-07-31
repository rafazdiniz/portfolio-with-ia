'use client'

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"

const EMAIL = process.env.EMAIL

if (!EMAIL) Error('Coloque o email no arquivo Env!')

interface ContactFormComponentProps {

}
export function ContactFormComponent({
}: ContactFormComponentProps) {
  // Hooks *****************************************************************

  // State *****************************************************************

  // Effect ****************************************************************

  // Function **************************************************************

  // Render ****************************************************************
  return <>
    <h2 className="text-5xl font-bold">ME ENVIE</h2>
    <h3 className="text-5xl font-bold text-gray-700 mb-12">UM EMAIL</h3>

    <form
      className="space-y-4"
      action={`https://formsubmit.co/${EMAIL}`}
      method="POST"
    >
      <div>
        <Input type="text" name="name" placeholder="Nome" className="bg-gray-900 border-gray-800 text-white" />
      </div>
      <div>
        <Input type="email" name="email" placeholder="Email" className="bg-gray-900 border-gray-800 text-white" />
      </div>
      <div>
        <Input type="text" name="subject" placeholder="Assunto" className="bg-gray-900 border-gray-800 text-white" />
      </div>
      <div>
        <Textarea name="message" placeholder="Mensagem" className="bg-gray-900 border-gray-800 text-white min-h-32" />
      </div>
      <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-600 text-white">Submit</Button>
    </form>
  </>
}

export function ContactFormBudgetComponent() {

  return <>
    <h2 className="text-5xl font-bold">VAMOS TRABALHAR</h2>
    <h3 className="text-5xl font-bold text-gray-700 mb-12">JUNTOS</h3>

    <form
      className="space-y-6"
      action={`https://formsubmit.co/${EMAIL}`}
      method="POST"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-gray-400 text-sm">
            Nome
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Seu Nome"
            className="bg-gray-900 border-gray-800 text-white h-12 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="seu@email.com"
            className="bg-gray-900 border-gray-800 text-white h-12 rounded-md"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-gray-400 text-sm">
          Orçamento
        </label>
        <Select
          name="budget"
        >
          <SelectTrigger className="bg-gray-900 border-gray-800 text-white h-12 rounded-md">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-800 text-white">
            <SelectItem value="less-5k">menor que R$5,000</SelectItem>
            <SelectItem value="5k-10k">R$5,000 - R$10,000</SelectItem>
            <SelectItem value="10k-20k">R$10,000 - R$20,000</SelectItem>
            <SelectItem value=">-20k">Maior que R$20,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-gray-400 text-sm">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Mensagem.."
          className="bg-gray-900 border-gray-800 text-white min-h-32 rounded-md"
        />
      </div>

      <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-600 text-white h-12 rounded-md">Enviar</Button>
    </form>
  </>
}
