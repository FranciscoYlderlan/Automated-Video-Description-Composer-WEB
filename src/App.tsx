import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Github } from "lucide-react"
export function App() {

    return (
      <div className="min-h-screen flex flex-col">
        <div className="px-6 py-6 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">upload.ai</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Desenvolvido com 💙</span>
            <Separator orientation="vertical" className="h-6"/>
            <Button className="flex gap-1 " variant={"outline"}>
              <Github className="w-4 h4" />  
              GitHub
            </Button>
          </div>
        </div>

      </div>
    )
}

