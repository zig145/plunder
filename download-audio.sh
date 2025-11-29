#!/bin/bash
# Download free pirate audio clips from royalty-free sources
# This script downloads CC0 or Creative Commons licensed audio

mkdir -p public/audio

# Note: These are example sources. You may need to adjust URLs based on availability.
# All audio should be royalty-free and appropriate for the project.

echo "Downloading pirate audio clips..."

# Option 1: Use Pixabay (CC0 licensed)
# Pirates Life - Generic pirate soundtrack
curl -L "https://pixabay.com/download/?filename=pirate-songs-142298.mp3&token=" -o public/audio/pirates-life.mp3 2>/dev/null || echo "Pixabay download failed"

# Option 2: Use Freesound.org (requires account, shown for reference)
# You can manually download from: https://freesound.org/ and search "pirate"

# Option 3: Use YouTube Audio Library (requires manual download)
echo "For best results, manually download from:"
echo "1. Pixabay: https://pixabay.com/music/search/pirate/"
echo "2. Freesound: https://freesound.org/search/?q=pirate"
echo "3. YouTube Audio Library: https://www.youtube.com/audiolibrary"
echo ""
echo "Download and place files in public/audio/ with these names:"
echo "  - pirates-life.mp3"
echo "  - pirate-laugh.mp3"
echo "  - treasure-found.mp3"
echo "  - sword-clash.mp3"
echo "  - pirate-shout.mp3"
