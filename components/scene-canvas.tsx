"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "@/components/scene"

export function SceneCanvas() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    )
}


