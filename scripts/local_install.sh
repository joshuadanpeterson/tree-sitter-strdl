#!/bin/bash

STRUDEL_LOCAL_DIR="~/.local/share/nvim/lazy/nvim-treesitter/queries/strudel"

echo 'Installing tree-sitter-strudel locally'
if [ ! -d "${STRUDEL_LOCAL_DIR}" ]; then
	echo 'Creating ${STRUDEL_LOCAL_DIR}'
	mkdir -p ${STRUDEL_LOCAL_DIR}
else
	echo '${STRUDEL_LOCAL_DIR} exists'
fi

echo 'Copying queries/*scm to ${STRUDEL_LOCAL_DIR}'
cp queries/*scm ${STRUDEL_LOCAL_DIR}

echo 'RUN :TSInstall strudel' in nvim
