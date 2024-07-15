import { Link2, Save, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";

interface AddNewLinkModalProps {
    closeAddNewLinkModal: () => void;
    addNewLinkToLinksImportantes: (event: FormEvent<HTMLFormElement>)=> void;
}

export function AddNewLinkModal({
    closeAddNewLinkModal,
    addNewLinkToLinksImportantes,
}: AddNewLinkModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                            Cadastrar link
                        </h2>
                        <button onClick={closeAddNewLinkModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar os links importantes.
                    </p>
                </div>

                <form onSubmit={addNewLinkToLinksImportantes} className="space-y-3">
                    <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Tag className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="newLinkTitle"
                            placeholder="Título do link"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
                        />
                    </div>

                    <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Link2 className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="newLinkUrl"
                            placeholder="URL"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
                        />
                    </div>

                    <Button variant="primary" size="full" type="submit">
                        Salvar link
                        <Save className="size-5" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
