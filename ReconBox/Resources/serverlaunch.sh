DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source $DIR/Brownian/bin/activate
echo "sourceok"
sleep 3
export DJANGO_SETTINGS_MODULE=Brownian.settings
echo "djangok"
sleep 3
#python $DIR/Brownian/bin/django-admin.py syncdb
python $DIR/Brownian/bin/django-admin.py runserver
echo "serverok"