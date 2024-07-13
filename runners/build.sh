#!/bin/sh -x

[ -d "${GITHUB_WORKSPACE}" ] && PROJECT_DIR="${GITHUB_WORKSPACE}"
[ "${PROJECT_DIR}" != "${PWD}" ] && cd "${PROJECT_DIR}"

mkdir artifacts
mkdir artifacts/overrides
for dir in $(ls)
    do
    echo $dir
        if [-d $dir];then
            echo $dir
            mv $dir artifacts/overrides
        fi
    done 
#mv manifest.json .artifacts
#mv modlist.html .artifacts