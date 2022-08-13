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




    await Promise.all([
        vite.build({ configFile: 'vite.config.ts', clearScreen: false }),
        vite.build({ configFile: 'vite.devtools.config.ts', clearScreen: false })
    ])

    await Promise.all([
        fs.copyFile(`manifest.${target}.json`, path.join(distPath, 'manifest.json')),
        fs.cp('icons', path.join(distPath, 'icons'), { recursive: true })
    ])
    
    console.log(`Build for ${target} finished`)
    
}

main()