from datetime import datetime
from django.shortcuts import render
from apps.lockdown.models import Country


def indexview(request):

    startDate = Country.objects.get(id=1).lockdownStart.timestamp()
    endDate = Country.objects.get(id=1).lockdownEnd.timestamp()
    currentDate = datetime.today().timestamp()

    totalTime = endDate - startDate
    timeLeft = endDate - currentDate
    progression = timeLeft / totalTime * 100
    progression = 100 - progression

    totalDays = totalTime / 86400

    context = {
        'country': Country.objects.get(id=1),
        'progression': round(progression),
        'totalDays': round(totalDays),
    }

    return render(request, 'frontend/index-video.html', context)
