import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SpatialMode = 
  | 'TERRAIN_HERO'
  | 'REALITY_CAPTURE'
  | 'SCAN_TO_BIM'
  | 'LIDAR'
  | 'GEOSPATIAL'
  | 'SURVEYING'
  | 'DIGITAL_TWIN'
  | 'STAGE_1_REALITY'
  | 'STAGE_2_PROCESSING'
  | 'STAGE_3_MODEL';

interface SpatialSceneContextType {
  mode: SpatialMode;
  setMode: (mode: SpatialMode) => void;
  realityStage: 1 | 2 | 3;
  setRealityStage: (stage: 1 | 2 | 3) => void;
}

const SpatialSceneContext = createContext<SpatialSceneContextType>({
  mode: 'TERRAIN_HERO',
  setMode: () => {},
  realityStage: 1,
  setRealityStage: () => {},
});

export const SpatialSceneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<SpatialMode>('TERRAIN_HERO');
  const [realityStage, setRealityStageState] = useState<1 | 2 | 3>(1);

  const setRealityStage = (stage: 1 | 2 | 3) => {
    setRealityStageState(stage);
    if (stage === 1) setMode('STAGE_1_REALITY');
    else if (stage === 2) setMode('STAGE_2_PROCESSING');
    else if (stage === 3) setMode('STAGE_3_MODEL');
  };

  return (
    <SpatialSceneContext.Provider value={{ mode, setMode, realityStage, setRealityStage }}>
      {children}
    </SpatialSceneContext.Provider>
  );
};

export const useSpatialScene = () => useContext(SpatialSceneContext);
