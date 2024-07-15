import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { AddNewLinkModal } from "./add-new-link-modal";

export function ImportantLinks() {

    const[isAddNewLinkModalOpen, setIsAddNewLinkModalOpen] = useState(false);
    const[linksImportantes, setLinksImportantes] = useState([])

    function openAddNewLinkModal(){
        setIsAddNewLinkModalOpen(true);
    }
    function closeAddNewLinkModal(){
        setIsAddNewLinkModalOpen(false)
    }
    function addNewLinkToLinksImportantes(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const linkTitle = data.get("newLinkTitle")?.toString()
        const linkUrl = data.get("newLinkUrl")?.toString()
        const newLink = {title: linkTitle, url: linkUrl}

        if(!linkTitle && !linkUrl){
            console.log("erro")
            return
        }

        // CONSERTAR ESSES ERROS

        if (linksImportantes.some(link => link.title === newLink.title && link.url === newLink.url)) {
            console.log("Esse link já existe!");
            return;
          }

        setLinksImportantes([
            ...linksImportantes,
            newLink
        ])

    }

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>

            <div className="space-y-5">
                {linksImportantes.map(link=>(
                    <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            {link.title}
                        </span>
                        <a
                            title={link.title}
                            target="_blank"
                            href={link.url}
                            className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                        >
                            {link.url}
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                ))}
            </div>

            <Button onClick={openAddNewLinkModal} variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
            {isAddNewLinkModalOpen && (
                <AddNewLinkModal addNewLinkToLinksImportantes={addNewLinkToLinksImportantes} closeAddNewLinkModal={closeAddNewLinkModal} />
            )}
        </div>
    );
}
