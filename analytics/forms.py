from django import forms
from .models import *
from users.models import Country, City


class JobForm(forms.ModelForm):
    title = forms.CharField(
        max_length=120,
        widget=forms.TextInput(attrs={'class': 'Input_input__PhHFB  ', 'id': 'Title',
                                      'maxlength': '120', 'autocomplete': 'false'})
    )
    description = forms.CharField(
        widget=forms.Textarea(attrs={'placeholder': 'Enter job description'})
    )
    country = forms.ModelChoiceField(queryset=Country.objects.all(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi',
               'hx-get': 'cities_jobs/',
               'hx-target': '#id_city'}))
    city = forms.ModelChoiceField(queryset=City.objects.none(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi'}))
    # birthday = forms.DateField(widget=forms.DateInput(attrs={'class': 'MuiInputBase-input MuiOutlinedInput-input '
    #                                                                       'MuiInputBase-inputAdornedEnd css-1uvydh2',
    #                                                              'placeholder': 'YYYY/MM/DD'}))
    price = forms.CharField(
        widget=forms.TextInput(attrs={'class': "Input_input__PhHFB  ",
                                      'id': "Form",
                                      'maxlength': "120", 'min': "0", 'name': "title",
                                      'placeholder': " ", 'type': "text",})
    )
    skills = forms.ModelMultipleChoiceField(queryset=Skill.objects.all(), widget=forms.CheckboxSelectMultiple)
    markets = forms.ModelMultipleChoiceField(queryset=Market.objects.all(), widget=forms.CheckboxSelectMultiple)
    form = forms.ModelChoiceField(queryset=WorkForm.objects.all(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi'}))
    type = forms.ModelChoiceField(queryset=WorkType.objects.all(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi'}))
    experience = forms.CharField(
        widget=forms.TextInput(attrs={'class': "Input_input__PhHFB  ",
                                      'id': "Form",
                                      'maxlength': "20", 'min': "0", 'name': "title",
                                      'placeholder': "", 'type': "text",})
    )

    class Meta:
        model = Job
        fields = ['title', 'description', 'country', 'city', 'price', 'skills', 'markets', 'form', 'type', 'experience']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if "country" in self.data:
            country_id = int(self.data.get("country"))
            self.fields["city"].queryset = City.objects.filter(country_id=country_id)
