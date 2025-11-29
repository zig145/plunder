# PowerShell script to download free pirate audio clips
# Run this script to populate the public/audio directory

$audioDir = ".\public\audio"

# Create audio directory if it doesn't exist
if (!(Test-Path $audioDir)) {
    New-Item -ItemType Directory -Path $audioDir -Force | Out-Null
    Write-Host "Created $audioDir directory"
}

Write-Host "To add pirate audio to your app, download royalty-free files from:"
Write-Host ""
Write-Host "1. PIXABAY (CC0 Licensed - No attribution needed)"
Write-Host "   https://pixabay.com/music/search/pirate/"
Write-Host "   - Search for 'pirate' and download MP3 files"
Write-Host ""
Write-Host "2. FREESOUND (Creative Commons Licensed)"
Write-Host "   https://freesound.org/search/?q=pirate"
Write-Host "   - Search for 'pirate' and download audio files"
Write-Host ""
Write-Host "3. YOUTUBE AUDIO LIBRARY (Free to use)"
Write-Host "   https://www.youtube.com/audiolibrary"
Write-Host "   - Search for 'pirate' in the sound effects or music section"
Write-Host ""
Write-Host "4. ZAPSPLAT (Free, CC0)"
Write-Host "   https://www.zapsplat.com/?s=pirate"
Write-Host ""
Write-Host "Expected audio files:"
Write-Host "  - pirates-life.mp3          (Main pirate theme song)"
Write-Host "  - pirate-laugh.mp3          (Villain/pirate laugh)"
Write-Host "  - treasure-found.mp3        (Treasure discovery sound)"
Write-Host "  - sword-clash.mp3           (Sword fight sound)"
Write-Host "  - pirate-shout.mp3          (Arr! Shout)"
Write-Host ""
Write-Host "After downloading, save them to: $audioDir"
Write-Host ""
Write-Host "Example file download:"
Write-Host "Place downloaded files like: .\public\audio\pirates-life.mp3"
Write-Host ""
Write-Host "The app has fallback procedural sounds if files are missing."
