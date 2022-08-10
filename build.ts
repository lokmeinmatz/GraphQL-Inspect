import esbuild from 'esbuild'
import { deleteSync } from 'del'
import fs from 'node:fs/promises'
import path from 'node:path'
import vite from 'vite'


enum BuildTarget {
    Firefox = 'firefox',
    Chrome = 'chrome'
}

async function main() {
    
    const target: BuildTarget | string = process.argv[2]
    if (target !== BuildTarget.Firefox && target !== BuildTarget.Chrome) {
        console.error('only allowed firefox and chrome as argument')
        process.exit(1)
    }
    
    console.log(`Building for ${target}`)

    
    const distPath = path.join('dist', target)
    
    deleteSync(distPath)


    await vite.build()
    /*
    await esbuild.build({
        entryPoints: {
            'background': 'src/background.ts'
        },
        bundle: true,
        outdir: distPath
    })
    */
    await Promise.all([
        fs.copyFile(`manifest.${target}.json`, path.join(distPath, 'manifest.json')),
        fs.copyFile(`panel.html`, path.join(distPath, 'panel.html')),
        fs.cp('icons', path.join(distPath, 'icons'), { recursive: true })
    ])
    
    console.log(`Build for ${target} finished`)
    
}

main()