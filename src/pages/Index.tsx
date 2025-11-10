const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-8 py-16">
        
        <header className="mb-16 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">Александр Петров</h1>
          <p className="text-xl text-gray-600 mb-6">Data Scientist / Machine Learning Engineer</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span>a.petrov@example.com</span>
            <span>│</span>
            <span>+7 (999) 123-45-67</span>
            <span>│</span>
            <a href="https://github.com/apetrov" className="hover:text-black transition-colors">github.com/apetrov</a>
            <span>│</span>
            <a href="https://linkedin.com/in/apetrov" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-4">О себе</h2>
          <div className="space-y-3 text-[15px] leading-relaxed">
            <p>
              Специализируюсь на построении end-to-end ML решений для задач компьютерного зрения и NLP. 
              Имею 5+ лет опыта работы как в стартапах, так и в крупной продуктовой компании.
            </p>
            <p>
              Умею не только строить модели, но и разворачивать их в production, обеспечивая бизнес-эффект. 
              Опыт руководства командой из 3 ML-инженеров.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-6">Опыт работы</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium">DataTech Solutions</h3>
                <span className="text-sm text-gray-500">2022 – н.в.</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Senior ML Engineer</p>
              <ul className="space-y-2 text-[15px] leading-relaxed">
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Разработал и внедрил систему компьютерного зрения для автоматической классификации продукции → 
                  увеличил скорость обработки на <strong>300%</strong> (с 100 до 400 изображений/мин)
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Оптимизировал pipeline обучения моделей NLP → сократил время обучения на <strong>65%</strong> 
                  через внедрение mixed precision training
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Руководил командой из 3 ML-инженеров, организовал code review процесс и внедрил best practices MLOps
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Внедрил A/B тестирование моделей в production → повысил конверсию на <strong>12%</strong>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium">AI Innovations Lab</h3>
                <span className="text-sm text-gray-500">2020 – 2022</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">ML Engineer</p>
              <ul className="space-y-2 text-[15px] leading-relaxed">
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Построил recommendation system на основе collaborative filtering → увеличил engagement на <strong>28%</strong>
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Разработал NLP модель для анализа тональности отзывов с точностью <strong>F1=0.89</strong>
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Внедрил CI/CD pipeline для ML моделей с использованием Docker, Kubernetes и MLflow
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium">Analytics Corp</h3>
                <span className="text-sm text-gray-500">2019 – 2020</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Junior Data Scientist</p>
              <ul className="space-y-2 text-[15px] leading-relaxed">
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Разработал модели прогнозирования временных рядов для оптимизации складских запасов
                </li>
                <li className="pl-4 relative before:content-['●'] before:absolute before:left-0 before:text-[8px] before:top-[9px]">
                  Автоматизировал обработку данных с помощью Python и SQL → сократил время на <strong>40%</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-6">Ключевые проекты</h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-black pl-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">Система распознавания объектов на конвейере</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500">Computer Vision</p>
              </div>
              
              <div className="space-y-3 text-[15px] leading-relaxed">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Задача</p>
                  <p>Автоматизировать контроль качества продукции на производственной линии, 
                  распознавая дефекты в режиме реального времени</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Решение</p>
                  <p>Разработал двухступенчатую систему: YOLOv8 для детекции объектов + ResNet-50 для классификации дефектов. 
                  Использовал data augmentation и transfer learning для работы с ограниченной выборкой (2000 изображений)</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Стек</p>
                  <p className="text-sm">Python, PyTorch, YOLOv8, OpenCV, FastAPI, Docker, PostgreSQL, Redis</p>
                </div>
                
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Результат</p>
                  <p>Точность <strong>mAP@0.5 = 94%</strong> на тестовой выборке. 
                  Система обрабатывает <strong>30 FPS</strong> и интегрирована в production, 
                  выявляя <strong>1000+</strong> дефектов ежедневно</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-black pl-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">NLP-система анализа клиентских обращений</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500">Natural Language Processing</p>
              </div>
              
              <div className="space-y-3 text-[15px] leading-relaxed">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Задача</p>
                  <p>Автоматизировать категоризацию и приоритизацию входящих обращений в техподдержку</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Решение</p>
                  <p>Fine-tuned модель ruBERT для multi-label классификации по 12 категориям с определением приоритета. 
                  Добавил sentiment analysis для выявления негативных обращений</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Стек</p>
                  <p className="text-sm">Python, Transformers, ruBERT, PyTorch, scikit-learn, FastAPI, MLflow, Airflow</p>
                </div>
                
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Результат</p>
                  <p>Точность <strong>F1 = 0.91</strong>. 
                  Время обработки сокращено на <strong>75%</strong> (с 8 до 2 минут). 
                  Обрабатывает <strong>5000+</strong> обращений в день</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-black pl-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">Прогнозирование оттока клиентов</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500">Predictive Analytics</p>
              </div>
              
              <div className="space-y-3 text-[15px] leading-relaxed">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Задача</p>
                  <p>Предсказывать вероятность оттока клиентов за 30 дней для проактивного удержания</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Решение</p>
                  <p>Построил ensemble модель (LightGBM + CatBoost + XGBoost) с feature engineering. 
                  Использовал SMOTE для балансировки классов и Optuna для гиперпараметров</p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Стек</p>
                  <p className="text-sm">Python, LightGBM, CatBoost, XGBoost, pandas, scikit-learn, SHAP, PostgreSQL</p>
                </div>
                
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Результат</p>
                  <p><strong>ROC-AUC = 0.87</strong>, <strong>Precision@K(10%) = 0.73</strong>. 
                  Retention rate улучшен на <strong>18%</strong> благодаря таргетированным кампаниям</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-6">Навыки и технологии</h2>
          
          <div className="grid grid-cols-1 gap-4 text-[15px]">
            <div>
              <span className="text-sm font-medium">Programming Languages:</span>
              <span className="text-gray-600"> Python (advanced), SQL, R, Bash, JavaScript (basics)</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">ML Frameworks:</span>
              <span className="text-gray-600"> PyTorch (Lightning), TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">Computer Vision:</span>
              <span className="text-gray-600"> YOLOv8, DETR, Mask R-CNN, OpenCV, Torchvision, Albumentations</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">NLP:</span>
              <span className="text-gray-600"> Transformers (BERT, GPT), Hugging Face, SpaCy, NLTK, ruBERT</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">Data Analysis & Visualization:</span>
              <span className="text-gray-600"> pandas, NumPy, SciPy, Matplotlib, Seaborn, Plotly</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">MLOps & DevOps:</span>
              <span className="text-gray-600"> Docker, Kubernetes, MLflow, DVC, Airflow, GitHub Actions, FastAPI</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">Databases:</span>
              <span className="text-gray-600"> PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse</span>
            </div>
            
            <div>
              <span className="text-sm font-medium">Cloud & Big Data:</span>
              <span className="text-gray-600"> AWS (S3, EC2, SageMaker), GCP, Apache Spark, Hadoop</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-6">Достижения и награды</h2>
          
          <div className="space-y-4 text-[15px]">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-medium">Kaggle Competitions Expert</p>
                <span className="text-sm text-gray-500">2023</span>
              </div>
              <p className="text-gray-600">Топ-3% участников, 2 серебряные и 3 бронзовые медали в соревнованиях по Computer Vision и NLP</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-medium">Best ML Solution Award</p>
                <span className="text-sm text-gray-500">DataTech Solutions, 2023</span>
              </div>
              <p className="text-gray-600">Награда за разработку системы компьютерного зрения, принесшей экономию $500K в год</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-medium">Публикации и выступления</p>
                <span className="text-sm text-gray-500">2021 – 2024</span>
              </div>
              <p className="text-gray-600">3 доклада на AI/ML конференциях (AI Journey, DataFest), 2 статьи на Habr с 50K+ просмотров</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-medium">Сертификации</p>
                <span className="text-sm text-gray-500">2020 – 2023</span>
              </div>
              <p className="text-gray-600">Deep Learning Specialization (Coursera), TensorFlow Developer Certificate, 
              AWS Certified Machine Learning – Specialty</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-4">Образование</h2>
          <div className="text-[15px]">
            <p className="font-medium mb-1">МФТИ, Прикладная математика и информатика</p>
            <p className="text-gray-600 mb-4">Магистратура, 2017 – 2019</p>
            
            <p className="text-sm font-medium mb-2">Дополнительное образование:</p>
            <ul className="text-gray-600 space-y-1">
              <li>● Machine Learning Specialization (Stanford Online, Coursera)</li>
              <li>● Deep Learning Specialization (deeplearning.ai)</li>
              <li>● Advanced Computer Vision (HSE University)</li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          Рекомендации предоставляются по запросу
        </footer>

      </div>
    </div>
  );
};

export default Index;
