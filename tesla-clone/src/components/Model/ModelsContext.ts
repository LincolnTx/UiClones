import React, { ReactNode } from 'react';

export interface AnimeModel {
    modelName: string;
    overlayNode: ReactNode;
    sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>;
    registeredModels: AnimeModel[];
    registerModel: (model: AnimeModel) => void;
    unregisterModel: (modelName: string) => void;
    getModelByName: (modelName: string) => AnimeModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);