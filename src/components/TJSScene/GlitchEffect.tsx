import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  EffectComposer,
  RenderPass,
  EffectPass,
  ChromaticAberrationEffect,
  SMAAEffect,
  SMAAPreset,
  GlitchEffect,
  GlitchMode,
  PixelationEffect,
  ScanlineEffect,
  ShockWaveEffect,
  NoiseEffect,
  BlendFunction
} from "postprocessing";
import { Vector3 } from "three";
import { useMemo } from "react";


const Effect = ({ children }: any) => {
  const { gl, camera, scene } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));
    // comp.addPass(
    //   new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.ULTRA }))
    // );
    // comp.addPass(
    //   new EffectPass(camera, new NoiseEffect({blendFunction: BlendFunction.OVERLAY}))
    // )
    // comp.addPass(
    //   new EffectPass(camera, new PixelationEffect(5))
    // )
    // comp.addPass(
    //   new EffectPass(camera, new GlitchEffect())
    // )
    // comp.addPass(
    //   new EffectPass(camera, new ScanlineEffect({
    //     density: 2
    //   }))
    // )
    return comp;
  }, [gl, scene, camera]);

  useFrame(() => {
    composer.render();
  }, 1);

  return <></>;
};

export default Effect