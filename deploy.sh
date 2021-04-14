#!/bin/bash
dev=house@ho
prod=house@47.100.79.237

www=/home/house/www/
project=www.tar

function deployDev {
    npm run build
    cd dist
    rm ${project}
    tar -zcvf ${project} *
    scp ${project} ${dev}:/home/house/    
    ssh ${dev} sh deploy_www.sh
}

if [ "$1" == "all" ]; then
    deployDev
    ssh ${dev} sh deploy_www.sh prod
elif [ "$1" == "prod" ]; then
    ssh ${dev} sh deploy_www.sh prod
else
    deployDev
fi