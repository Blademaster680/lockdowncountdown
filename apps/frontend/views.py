from datetime import datetime
from django.shortcuts import render
from apps.lockdown.models import Country


def indexview(request):

    startDate = to_integer(Country.objects.get(id=1).lockdownStart)
    endDate = to_integer(Country.objects.get(id=1).lockdownEnd)
    currentDate = to_integer(datetime.today())

    totalTime = endDate - startDate
    timeLeft = endDate - currentDate
    progression = timeLeft / totalTime * 100
    progression = 100 - progression

    totalDays = totalTime / 1440

    context = {
        'country': Country.objects.get(id=1),
        'progression': round(progression),
        'totalDays': round(totalDays)
    }

    return render(request, 'frontend/index-video.html', context)

def to_integer(dt_time):
    return 525600*dt_time.year + 43800*dt_time.month + 1440*dt_time.day