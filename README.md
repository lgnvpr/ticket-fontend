
# ticket-fontend

# for first run
git submodule update --init
git submodule update --recursive --remote #for only main branch
git pull --recurse-submodules
npm install
npm start

 # remote submodule 
git submodule deinit <path_to_submodule_folder> -f
git rm <path_to_submodule_folder>
git commit -m "Remove submodule" .
rm -rf .git/modules/<path_to_submodule_folder>