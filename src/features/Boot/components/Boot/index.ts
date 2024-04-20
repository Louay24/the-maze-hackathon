import { Dispatch, SetStateAction } from "react";
import { BootApiKey, BootApiRoute } from "../../api/context";

export async function startChat(message : string , updateLines : Dispatch<SetStateAction<any>> , oldMessages :any) {
      const messages = [
        ...oldMessages , 
        {
          role: "system",
          content:
            "You are ChatGPT, a language model trained to ansewr questions , your new name is MAZE-BOOT and you are developed by team called infinty bugs ",
        },
        {
          role: "user",
          content: message,
        },
      ];
      try {
        const response = await fetch(BootApiRoute, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BootApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages,
            stream: true,
            stop: ["\n\n\n\n"],
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const reader = response?.body?.getReader();
        let jsonBuffer = "";
        while (true) {
          const { done, value } = (await reader?.read()) || {};
          if (done) {
            break;
          }
          const chunk = new TextDecoder().decode(value);
          jsonBuffer += chunk;

          const jsonObjects = jsonBuffer.split("data:");
          jsonBuffer = jsonObjects.pop() as string;
          jsonObjects.forEach(jsonObject => {
            try {
              const jsonData = JSON.parse(jsonObject);
              if (jsonData && jsonData.choices && jsonData.choices.length > 0) {
                const content = jsonData.choices[0].delta.content || "";
                updateLines((prev: any)=>`${prev} ${content}`);
              }
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
