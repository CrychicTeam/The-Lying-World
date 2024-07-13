#!/bin/sh -x

[ -d "${GITHUB_WORKSPACE}" ] && PROJECT_DIR="${GITHUB_WORKSPACE}"
[ "${PROJECT_DIR}" != "${PWD}" ] && cd "${PROJECT_DIR}"

mkdir artifacts
for dir in $(ls /)
    do
        [ -d $dir ] && mv $dir artifacts/overrides
    done 
mv manifest.json artifacts
mv modlist.html artifacts