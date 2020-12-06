#!/bin/bash
dev=house@47.98.42.1
prod=house@datoucoin.cn

www=/home/house/www/
project=hk.tar


function deployDev {
    npm run build
    cd dist
    rm ${project}
    tar -zcvf ${project} *
    scp ${project} ${dev}:${www}
    ssh ${dev} tar -xzvf ${www}${project} -C ${www}
    ssh ${dev} rm ${www}${project}
}

function deployProd {
    ssh ${prod} sh update_www.sh
}

if [ "$1" == "all" ]; then
    deployDev
    deployProd
elif [ "$1" == "prod" ]; then
    deployProd
else
    deployDev
fi