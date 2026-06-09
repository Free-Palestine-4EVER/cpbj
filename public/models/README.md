# Drop-in 3D models

Put real precast models here and they can replace the procedural geometry in the
3D showcase. Preferred format: **.glb** (binary glTF).

    public/models/pipe.glb
    public/models/culvert.glb
    public/models/manhole.glb

Most marketplace models ship as FBX / OBJ / MAX. Those convert cleanly to GLB:

    # OBJ → GLB
    ~/.local/node/bin/obj2gltf -i model.obj -o public/models/pipe.glb --binary
    # optimize / resize textures
    ~/.local/node/bin/gltf-transform optimize in.glb public/models/pipe.glb

Hand me any purchased file and I'll convert + wire it into Catalogue3D.tsx
(swap the procedural <PipeModel/> etc. for a <Gltf src> loader), keeping the
blueprint→concrete materialize and the studio lighting.

## Where to buy the good ones
- Sketchfab Store — "Concrete pipe" by Vertex-Design (4K PBR, real-world scale)
- TurboSquid — concrete pipe / manhole / culvert (100s of models, often FBX+PBR)
- CGTrader — "Precast Manhole Model -Detail-41" and culvert sets (PBR, GLB available)
- artgraphic3d.com — box culvert & concrete pipe packs (some GLTF/GLB)

## What's already real (no purchase needed)
- Concrete surface: Poly Haven `concrete_wall_008` (CC0 PBR, 2K) — /public/assets/concrete
- Environment light: Poly Haven `studio_small_08` HDRI (CC0) — /public/assets/hdri
