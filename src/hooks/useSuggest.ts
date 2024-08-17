import { SuggestionNameService } from "@/services/SuggestionNameService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useSuggest = () => {
  const suggestionFormSchema = z.object({
    name: z.string().min(3, { message: "O nome digitado deve ter mais de 3 caracteres" }).max(50),
    email: z.string(),
    uf: z.string().max(2),
    municipality: z.string(),
    community: z.string(),
    suggestedName: z.string().min(3, { message: "A sugestão deve ter mais de 3 caracteres" }).max(50),
  })

  type SuggestionFormValues = z.infer<typeof suggestionFormSchema>

  const defaultValues: Partial<SuggestionFormValues> = {
    uf: "RJ"
  }

  const form = useForm<SuggestionFormValues>({
    resolver: zodResolver(suggestionFormSchema),
    defaultValues,
    mode: "onChange",
  })
  
  const onSubmit = async (data: SuggestionFormValues, fish_id: string, token: string | null) => {
    if(token === null) {
      alert("Você é um robô?")
      return
    }

    try {
      await fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      
      SuggestionNameService.create({
        fish_id: fish_id,
        name: data.name,
        email: data.email,
        community_id: data.community,
        suggested_name: data.suggestedName,
      })
    } catch (e) {
      alert("Erro ao enviar sugestão")
    }
  }

  return {
    form,
    onSubmit
  }
}