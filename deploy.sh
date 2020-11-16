    env=house@47.98.42.1
    www=/home/house/www/
    project=hk.tar
    npm run build
    cd dist
    rm ${project}
    tar -zcvf ${project} *
    scp ${project} ${env}:${www}
    ssh ${env} tar -xzvf ${www}${project} -C ${www}